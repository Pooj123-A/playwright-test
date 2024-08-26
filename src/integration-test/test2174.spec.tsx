
import { test, expect } from "@playwright/experimental-ct-react";
import App2174 from "../example/App2174.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2174 />);
  await expect(component).toContainText("Learn React");
});
