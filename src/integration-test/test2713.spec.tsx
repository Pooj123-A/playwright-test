
import { test, expect } from "@playwright/experimental-ct-react";
import App2713 from "../example/App2713.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2713 />);
  await expect(component).toContainText("Learn React");
});
