
import { test, expect } from "@playwright/experimental-ct-react";
import App2705 from "../example/App2705.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2705 />);
  await expect(component).toContainText("Learn React");
});
