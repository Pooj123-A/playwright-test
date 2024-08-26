
import { test, expect } from "@playwright/experimental-ct-react";
import App405 from "../example/App405.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App405 />);
  await expect(component).toContainText("Learn React");
});
