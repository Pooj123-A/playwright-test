
import { test, expect } from "@playwright/experimental-ct-react";
import App31 from "../example/App31.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App31 />);
  await expect(component).toContainText("Learn React");
});
