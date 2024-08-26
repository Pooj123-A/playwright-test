
import { test, expect } from "@playwright/experimental-ct-react";
import App1452 from "../example/App1452.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1452 />);
  await expect(component).toContainText("Learn React");
});
