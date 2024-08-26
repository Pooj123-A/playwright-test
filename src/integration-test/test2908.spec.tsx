
import { test, expect } from "@playwright/experimental-ct-react";
import App2908 from "../example/App2908.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2908 />);
  await expect(component).toContainText("Learn React");
});
