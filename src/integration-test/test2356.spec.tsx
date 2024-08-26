
import { test, expect } from "@playwright/experimental-ct-react";
import App2356 from "../example/App2356.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2356 />);
  await expect(component).toContainText("Learn React");
});
