import type { NextPage } from 'next'

const SignUp: NextPage = () => {
  return (
    <div className='area'>
      <h1>新規登録</h1>
      <form action="http://127.0.0.1:5000/signup" method="POST">
        <div className="form-group">
          <label htmlFor="user_name" className="form-label">ユーザー名</label>
          <input type="text" name="user_name" className="form-control" />
          <br />
          <label htmlFor="user_password" className="form-label">パスワード</label>
          <input type="password" name="user_password" className="form-control" />
          <br />
          <button type="button" className="btn btn-outline-primary">
            <input type="submit" value="新規登録" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
