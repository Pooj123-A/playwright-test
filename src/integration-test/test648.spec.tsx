
import { test, expect } from "@playwright/experimental-ct-react";
import App648 from "../example/App648.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App648 />);
  await expect(component).toContainText("Learn React");
});
