import contentItems from "../mocks/mock.json";
import _ from "lodash";

export function getContent(searchParams) {
    return _.isEmpty(searchParams) ? contentItems.subjects : _(searchParams)
        .keys()
        .map(param =>
            contentItems.subjects.filter(item => {
                if (_.isArray(item[param])) {
                    console.log({ite:item[param], searchParams});
                    return item[param].some( a => a.includes(searchParams[param]) );
                }

                return item[param] === searchParams[param];

            })
        )
        .flatten()
        .uniqBy("title")
        .value();


}