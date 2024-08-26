
import { test, expect } from "@playwright/experimental-ct-react";
import App2250 from "../example/App2250.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2250 />);
  await expect(component).toContainText("Learn React");
});
