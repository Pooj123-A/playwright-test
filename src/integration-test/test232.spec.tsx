
import { test, expect } from "@playwright/experimental-ct-react";
import App232 from "../example/App232.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App232 />);
  await expect(component).toContainText("Learn React");
});
