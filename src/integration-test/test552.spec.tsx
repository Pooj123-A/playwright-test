
import { test, expect } from "@playwright/experimental-ct-react";
import App552 from "../example/App552.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App552 />);
  await expect(component).toContainText("Learn React");
});
