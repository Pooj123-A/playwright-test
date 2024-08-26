
import { test, expect } from "@playwright/experimental-ct-react";
import App2116 from "../example/App2116.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2116 />);
  await expect(component).toContainText("Learn React");
});
