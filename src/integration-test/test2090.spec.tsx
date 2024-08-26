
import { test, expect } from "@playwright/experimental-ct-react";
import App2090 from "../example/App2090.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2090 />);
  await expect(component).toContainText("Learn React");
});
