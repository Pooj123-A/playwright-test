
import { test, expect } from "@playwright/experimental-ct-react";
import App2767 from "../example/App2767.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2767 />);
  await expect(component).toContainText("Learn React");
});
