
import { test, expect } from "@playwright/experimental-ct-react";
import App2215 from "../example/App2215.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2215 />);
  await expect(component).toContainText("Learn React");
});
