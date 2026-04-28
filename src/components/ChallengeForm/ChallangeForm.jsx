import { Formik, Form, Field, ErrorMessage } from "formik";
const directionLabels = {
  "content-creator": "Контент-кріейтор",
  gamedev: "Геймдев",
  music: "Музика та бітмейкінг",
  streaming: "Стріми та відео",
};
const experienceLabels = {
  newbie: "Новачок",
  explorer: "Вже пробував",
  pro: "Впевнено в темі",
};
const ChallangeForm = () => {
  const showOption = ([key, value]) => (
    <option value={key} key={key}>
      {value}
    </option>
  );
  const showLevel = ([key, value]) => (
    <label key={key}>
      <Field name="level" type="radio" value={key} />
      <span>{value}</span>
    </label>
  );
  return (
    <Formik
      initialValues={{
        nickname: "",
        age: "",
        email: "",
        direction: "content-creator",
        level: "newbie",
        about: "",
        ready: false,
      }}
    >
      {({ values }) => {
        return (
          <Form>
            <label>
              <span>
                Ім'я або нікнейм<span>*</span>
              </span>
              <Field
                name="nickname"
                type="text"
                placeholder="Наприклад, PixelFox"
              />
              <ErrorMessage name="nickname" component="p" />
            </label>
            <div>
              <label>
                <span>
                  Вік<span>*</span>
                </span>
                <Field name="age" type="number" min="8" placeholder="14" />
                <ErrorMessage name="age" component="p" />
              </label>
              <label>
                <span>
                  Email<span>*</span>
                </span>
                <Field
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
                <ErrorMessage name="email" component="p" />
              </label>
            </div>
            <label>
              <span>
                Напрям табору<span>*</span>
              </span>
              <Field name="direction" as="select">
                {Object.entries(directionLabels).map(showOption)}
              </Field>{" "}
              <ErrorMessage name="direction" />
            </label>
            <fieldset>
              <legend>
                Рівень досвіду <span>*</span>
              </legend>
              <div>{Object.entries(experienceLabels).map(showLevel)}</div>
            </fieldset>
            <label>
              <span>
                Чому саме тебе треба взяти? <span>*</span>
              </span>
              <Field
                name="about"
                placeholder="Розкажи, що ти любиш створювати і який вайб принесеш у табір."
                as="textarea"
              />
              <ErrorMessage name="about" component="p" />
              <p>символів: {values.about.length}</p>
            </label>
            <label>
              <Field type="checkbox" name="ready" />
              <span>Готовий(-а) брати участь у мінічеленджах табору</span>
            </label>
            <button type="submit">Надіслати заявку</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ChallangeForm;
