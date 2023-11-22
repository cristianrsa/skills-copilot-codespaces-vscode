function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'module/skills/views/member.html',
        controller: 'skillsMemberCtrl',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}