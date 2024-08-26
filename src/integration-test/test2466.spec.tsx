
import { test, expect } from "@playwright/experimental-ct-react";
import App2466 from "../example/App2466.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2466 />);
  await expect(component).toContainText("Learn React");
});
