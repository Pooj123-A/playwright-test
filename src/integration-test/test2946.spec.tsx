
import { test, expect } from "@playwright/experimental-ct-react";
import App2946 from "../example/App2946.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2946 />);
  await expect(component).toContainText("Learn React");
});
