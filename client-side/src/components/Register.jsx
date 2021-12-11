export default function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          First name:
          <input type="text" name="first name" />
        </label>
        <label>
          Last name:
          <input type="text" name="last name" />
        </label>
        <label>
          Contact No.:
          <input type="tel" name="contact number" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
