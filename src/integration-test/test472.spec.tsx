
import { test, expect } from "@playwright/experimental-ct-react";
import App472 from "../example/App472.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App472 />);
  await expect(component).toContainText("Learn React");
});
