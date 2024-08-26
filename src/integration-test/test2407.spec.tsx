
import { test, expect } from "@playwright/experimental-ct-react";
import App2407 from "../example/App2407.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2407 />);
  await expect(component).toContainText("Learn React");
});
