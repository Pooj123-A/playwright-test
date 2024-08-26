
import { test, expect } from "@playwright/experimental-ct-react";
import App1969 from "../example/App1969.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1969 />);
  await expect(component).toContainText("Learn React");
});
