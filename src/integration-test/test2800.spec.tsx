
import { test, expect } from "@playwright/experimental-ct-react";
import App2800 from "../example/App2800.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2800 />);
  await expect(component).toContainText("Learn React");
});
