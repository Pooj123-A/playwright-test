
import { test, expect } from "@playwright/experimental-ct-react";
import App871 from "../example/App871.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App871 />);
  await expect(component).toContainText("Learn React");
});
