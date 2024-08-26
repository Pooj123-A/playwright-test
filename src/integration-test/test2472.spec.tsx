
import { test, expect } from "@playwright/experimental-ct-react";
import App2472 from "../example/App2472.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2472 />);
  await expect(component).toContainText("Learn React");
});
