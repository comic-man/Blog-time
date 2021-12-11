export class UserService {
  activeUsers =[ 'David', 'Jackie'];
  inactiveUsers = ['James', 'Kelly'];

  setToActive(id:number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
  }
  setToInactive(id:number){
    this.inactiveUsers.push(this.inactiveUsers[id]);
    this.activeUsers.splice(id,1);
  }
}
