
import { test, expect } from "@playwright/experimental-ct-react";
import App2051 from "../example/App2051.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2051 />);
  await expect(component).toContainText("Learn React");
});
