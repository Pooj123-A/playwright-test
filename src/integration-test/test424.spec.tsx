
import { test, expect } from "@playwright/experimental-ct-react";
import App424 from "../example/App424.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App424 />);
  await expect(component).toContainText("Learn React");
});
