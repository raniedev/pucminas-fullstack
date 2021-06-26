function Grafico(parametros) {
    let svg = d3.select(parametros.seletor)
        .attr('width', parametros.largura)
        .attr('height', parametros.altura);

    this.callback = parametros.callback;

    let margem = {
        esquerda: 120,
        direita: 20,
        superior: 40,
        inferior: 100
    };

    this.alturaPlotagem = parametros.altura - margem.esquerda - margem.direita;
    this.larguraPlotagem = parametros.largura - margem.superior - margem.inferior;

    this.plotagem = svg.append('g')
        .attr('width', this.larguraPlotagem)
        .attr('height', this.alturaPlotagem)
        .attr('transform', 'translate(' + margem.esquerda + ',' + margem.superior + ')');

    this.fnX = d3.scaleBand()
        .domain(parametros.dados.map(d => d.chave))
        .range([0, this.larguraPlotagem]).padding(0.1);

    this.fnY = d3.scaleLinear()
        .domain([0, d3.max(parametros.dados.map(d => d.valor))])
        .range([this.alturaPlotagem, 0]);

    this.fnCores = d3.scaleOrdinal()
        .domain([0, parametros.dados.length])
        .range(d3.schemeSet3);

    this.eixoX = d3.axisBottom(this.fnX);
    this.plotagem.append('g')
        .attr('id', 'eixoX')
        .attr('transform', 'translate(0, ' + this.alturaPlotagem + ')')
        .call(this.eixoX);
    
    this.eixoY = d3.axisLeft(this.fnY);
    this.plotagem.append('g').attr('id', 'eixoY').call(this.eixoY);

    this.grade = d3.axisRight(this.fnY).tickSize(this.larguraPlotagem).tickFormat('');
    this.plotagem.append('g').attr('id', 'grade').call(this.grade);
    
    svg.append('text')
        .attr('x', margem.esquerda)
        .attr('y', margem.superior + this.alturaPlotagem)
        .style('text-anchor', 'middle')
        .attr('transform', 'translate(' + this.larguraPlotagem/2 + ', 80)')
        .text(parametros.tituloX);

    svg.append('text')
        .attr('x', 0)
        .attr('y', 0)
        .style('text-anchor', 'middle')
        .attr('transform', 'translate(26, ' + (margem.superior + (this.alturaPlotagem/2)) + ') rotate(-90)')
        .text(parametros.tituloY);

    this.atualize = (novosDados) => {

        this.fnX.domain(novosDados.map((d) => d.chave));
        this.fnY.domain([0, d3.max(novosDados.map((d) => d.valor))]);
        this.fnCores.domain([0, novosDados.length]);

        this.plotagem.select('#eixoX').transition().duration(this.duration).call(this.eixoX);
        this.plotagem.select('#eixoY').transition().duration(this.duration).call(this.eixoY);
        this.plotagem.select('#grade').transition().duration(this.duration).call(this.grade);

        let self = this;

        let retangulos = this.plotagem.selectAll('.barra').data(novosDados);
        retangulos.enter().append('rect').classed('barra', true)
        .on('mouseover', function(){
            d3.select(this).style('fill-opacity', '0.5');
        })
        .on('mouseout', function(){
            d3.select(this).style('fill-opacity', '1');
        })
        .on('click', function(e){
            // d3.select(this).style('fill-opacity', '0.5');
            self.callback(e.target.__data__);
        });

        retangulos.exit().remove();

        this.plotagem.selectAll('.barra').transition().duration(this.duration)
            .attr('x', (d) => this.fnX(d.chave))
            .attr('y', (d) => this.fnY(d.valor))
            .attr('width', this.fnX.bandwidth())
            .attr('height', (d) => this.alturaPlotagem - this.fnY(d.valor))
            .attr('fill', (d) => this.fnCores(d.valor));

        let rotulos = this.plotagem.selectAll('.rotulo').data(novosDados);
        rotulos.enter().append('text').classed('rotulo', true);
        rotulos.exit().remove();
        
        this.plotagem.selectAll('.rotulo').transition().duration(this.duration)
            .text((d) => d.valor)
            .attr('x', (d) => this.fnX(d.chave))
            .attr('dx', () => this.fnX.bandwidth() * 0.625)
            .attr('y', (d) => this.fnY(d.valor))
            .attr('dy', -5)

            this.duration = 800;
    };

    this.atualize(parametros.dados);
}