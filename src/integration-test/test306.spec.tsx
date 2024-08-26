
import { test, expect } from "@playwright/experimental-ct-react";
import App306 from "../example/App306.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App306 />);
  await expect(component).toContainText("Learn React");
});
