<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>
        <div class="clearfix"></div>

        <div class="page-container">

            <div class="page-content">
                <div class="row">
                    <div class="col-md-12">

                        <div class="portlet light ">
                            <div class="portlet-title">
                                <!--<div class="caption">-->
                                <!--<i class="icon-social-dribbble font-green"></i>-->
                                <!--<span class="caption-subject font-green bold uppercase">Table</span>-->
                                <!--</div>-->
                                <!--<div class="actions">-->
                                <!--<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">-->
                                <!--<i class="icon-cloud-upload"></i>-->
                                <!--</a>-->
                                <!--<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">-->
                                <!--<i class="icon-wrench"></i>-->
                                <!--</a>-->
                                <!--<a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">-->
                                <!--<i class="icon-trash"></i>-->
                                <!--</a>-->
                                <!--</div>-->
                            </div>


                            <div class="portlet-body">

                                <div class="columns columns-right btn-group pull-right">
                                    <button class="btn btn-primary" v-on:click="getAnswers(answers)">Search</button>
                                </div>

                                <div class="pull-right search">
                                    <input class="form-control" type="text" v-model="intitle">
                                </div>

                                <br>
                                <br>

                                <div class="table-scrollable">
                                    <table class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th> № </th>
                                            <th> Status </th>
                                            <th> Title </th>
                                            <th> Created</th>
                                            <th> Owner name</th>
                                            <th> Owner profile link</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(e, index) in answers.responses">
                                            <td> {{index + 1}} </td>
                                            <td class="fa fa-check" style="color: green; font-size: large" v-if="e.answered == true"></td>
                                            <td class="fa fa-times" style="color: red; font-size: large" v-if="e.answered == false"></td>
                                            <td><a v-bind:href="e.link">{{e.title}}</a></td>
                                            <td> {{e.queryDate.substring(0, 10)}} </td>
                                            <td> {{e.ownerName}} </td>
                                            <td><a v-bind:href="e.userLink">{{e.userLink}}</a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import answers from "../api/answers";

    export default {
        created: function () {

        },
        data: function () {
            return {
                answers: {responses: []},
                intitle: null,
            }
        },

        methods: {

            getAnswers: function (storage) {

                this.intitle = this.intitle.replace(' ', '');

                if (this.intitle == null || this.intitle == '') {
                    Common.showToast('error', 'Error', 'Query parameter is empty');
                    return;
                }

                answers.getAnswers(this.intitle, function (d) {
                    storage.responses.splice(0, storage.responses.length);
                    for (let i = 0; i < d.responses.length; i++) {
                        let e = d.responses[i];
                        storage.responses.push(e);
                    }

                });

            }

        }
    }


</script>

