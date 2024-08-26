
import { test, expect } from "@playwright/experimental-ct-react";
import App1155 from "../example/App1155.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1155 />);
  await expect(component).toContainText("Learn React");
});
