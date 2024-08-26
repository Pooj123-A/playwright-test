
import { test, expect } from "@playwright/experimental-ct-react";
import App2548 from "../example/App2548.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2548 />);
  await expect(component).toContainText("Learn React");
});
