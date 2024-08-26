
import { test, expect } from "@playwright/experimental-ct-react";
import App1699 from "../example/App1699.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1699 />);
  await expect(component).toContainText("Learn React");
});
