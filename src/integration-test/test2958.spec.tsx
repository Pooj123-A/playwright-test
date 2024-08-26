
import { test, expect } from "@playwright/experimental-ct-react";
import App2958 from "../example/App2958.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2958 />);
  await expect(component).toContainText("Learn React");
});
