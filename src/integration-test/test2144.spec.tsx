
import { test, expect } from "@playwright/experimental-ct-react";
import App2144 from "../example/App2144.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2144 />);
  await expect(component).toContainText("Learn React");
});
