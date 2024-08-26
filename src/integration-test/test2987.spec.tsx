
import { test, expect } from "@playwright/experimental-ct-react";
import App2987 from "../example/App2987.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2987 />);
  await expect(component).toContainText("Learn React");
});
