
import { test, expect } from "@playwright/experimental-ct-react";
import App2061 from "../example/App2061.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2061 />);
  await expect(component).toContainText("Learn React");
});
