import * as React from 'react';
import * as Highcharts from 'highcharts';
import { Action } from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions/categories';
import { AppState } from 'states/app-state';
import { CategoryState } from 'states//categories';

const config: Highcharts.Options = {
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        text: 'Spending per category',
        style: {
            color: 'rgba(255, 255, 255, 0.7)'
        }
    },
    xAxis: {
        categories: ['Test', 'test1', 'test2'],
        title: {},
        visible: true,
        labels: {
            style: {
                color: 'white'
            }
        }
    },

    yAxis: {
        title: {},
        tickInterval: 250,
        lineWidth: 2,
        labels: {
            overflow: 'justify'
        },
        categories: ['Test', 'test1', 'test2'],
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                style: {
                    color: 'rgba(255, 255, 255, 1)',
                    textOutline: undefined
                }
            },
        },
        bar: {
            pointWidth: 15,
            borderColor: 'rgba(0,0,0,0)',
            negativeColor: 'rgba(255, 0, 0, 0.4)',
            threshold: 0,
            color: 'rgba(0, 255, 0, 0.4)',
        }

    },

    series: [{
        name: 'Categories',
        data: [220, 500]
    }]
};

interface CategoriesDispatchProps {
    getCategories(): Action;
}

interface CategoriesStateProps {
    categories: CategoryState;
}

declare type CategoriesProps = CategoriesStateProps & CategoriesDispatchProps;

class Categories extends React.Component<CategoriesProps> {

    private chart: Highcharts.ChartObject;

    componentWillMount() {
        this.props.getCategories();
    }

    componentDidMount() {
        if (!this.chart) {
            if (this.props.categories && config.series) {
                config.series[0].data = this.props.categories.categories.map(
                    x => { return -500 + Math.round(Math.random() * 10000); }
                );

                if (config.xAxis) {
                    const axis: Highcharts.AxisOptions = config.xAxis as Highcharts.AxisOptions;
                    axis.categories = this.props.categories.categories.map(
                        x => {
                            return x.name;
                        }
                    );
                }
            }
        }
    }

    componentWillReceiveProps(nextProps: CategoriesProps) {
        this.chart = Highcharts.chart('categories', config);
    }

    render() {

        return (
            <div className="categories section col">
                <div className="p-3 h-100">
                    <h6>Categories</h6>
                    <div id="categories" className="h-100" />
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch: Function): CategoriesDispatchProps {
    return {
        getCategories: () => dispatch(Actions.fetchCategories())
    };
}

function mapStateToProps(state: AppState): CategoriesStateProps {
    return {
        categories: state.categoriesState
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);