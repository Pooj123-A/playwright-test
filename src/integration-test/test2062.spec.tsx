
import { test, expect } from "@playwright/experimental-ct-react";
import App2062 from "../example/App2062.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2062 />);
  await expect(component).toContainText("Learn React");
});
