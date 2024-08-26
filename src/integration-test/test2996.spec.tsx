
import { test, expect } from "@playwright/experimental-ct-react";
import App2996 from "../example/App2996.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2996 />);
  await expect(component).toContainText("Learn React");
});
