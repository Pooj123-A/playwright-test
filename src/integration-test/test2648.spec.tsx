
import { test, expect } from "@playwright/experimental-ct-react";
import App2648 from "../example/App2648.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2648 />);
  await expect(component).toContainText("Learn React");
});
