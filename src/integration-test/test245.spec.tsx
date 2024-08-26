
import { test, expect } from "@playwright/experimental-ct-react";
import App245 from "../example/App245.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App245 />);
  await expect(component).toContainText("Learn React");
});
