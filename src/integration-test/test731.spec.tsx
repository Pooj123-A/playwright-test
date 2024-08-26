
import { test, expect } from "@playwright/experimental-ct-react";
import App731 from "../example/App731.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App731 />);
  await expect(component).toContainText("Learn React");
});
