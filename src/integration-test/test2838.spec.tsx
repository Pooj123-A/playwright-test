
import { test, expect } from "@playwright/experimental-ct-react";
import App2838 from "../example/App2838.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2838 />);
  await expect(component).toContainText("Learn React");
});
