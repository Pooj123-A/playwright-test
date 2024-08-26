
import { test, expect } from "@playwright/experimental-ct-react";
import App496 from "../example/App496.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App496 />);
  await expect(component).toContainText("Learn React");
});
