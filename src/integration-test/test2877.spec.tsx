
import { test, expect } from "@playwright/experimental-ct-react";
import App2877 from "../example/App2877.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2877 />);
  await expect(component).toContainText("Learn React");
});
