
import { test, expect } from "@playwright/experimental-ct-react";
import App2474 from "../example/App2474.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2474 />);
  await expect(component).toContainText("Learn React");
});
