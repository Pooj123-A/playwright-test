
import { test, expect } from "@playwright/experimental-ct-react";
import App2165 from "../example/App2165.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2165 />);
  await expect(component).toContainText("Learn React");
});
